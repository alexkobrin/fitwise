import { httpRouter } from "convex/server";
import {WebhookEvent} from "@clerk/nextjs/server";
import {Webhook} from "svix"
import {api} from "./_generated/api";
import {httpAction} from "./_generated/server";


const http = httpRouter();
http.route({
  path: "/clerk-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
     
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET
    if(!webhookSecret) {
      throw new Error(" CLERK_WEBHOOK_SECRET is not set");
    }
    const svix_id = request.headers.get("svix-id");
    const svix_timestamp = request.headers.get("svix-timestamp");
    const svix_signature = request.headers.get("svix-signature"); 
    if (!svix_id || !svix_timestamp || !svix_signature) {
       return  new Response("No svix header found", {
        status: 400,
       })
    }
    const payload = await request.text();
    const body = JSON.parse(payload);

    const wh = new Webhook(webhookSecret);
    let evt : WebhookEvent;
    try {
      evt = wh.verify(body, {
        "svix_id": svix_id,
        "svix_timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as WebhookEvent;
    } catch (e) {
      console.error("Error verifying webhook:", e);
      return new Response("Invalid webhook signature", {
        status: 400,
      });
    }

    const eventType = evt.type

    if(eventType === "user.created") {
      const {id , first_name, last_name, image_url,  email_addresses} = evt.data  
       const email = email_addresses[0]?.email_address;
       const name = `${first_name || ""} ${last_name || ""}`.trim();

       try {
         await ctx.runMutation(api.users.syncUser, {
           clerkId: id,
           name,
           email: email || "",
           image:  image_url,
         });
       } catch (error) {
         console.error("Error creating user", error);
         return new Response("Error creating user", {
           status: 500,
         });
       }
    }

})
})