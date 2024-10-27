export default defineEventHandler((event)=>{
    console.log("URL: ", event.node.req.url);
});