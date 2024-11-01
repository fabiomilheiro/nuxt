export default defineEventHandler((event)=>{
    console.log("Log middleware: URL = ", event.node.req.url);
});