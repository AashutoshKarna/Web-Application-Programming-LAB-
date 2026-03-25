from fastapi import FastAPI, Request
import json
from time import perf_counter
from routers import todo_router, user_router

app = FastAPI()
# here, using the concepts of apirouetr
app.state.request_count = 0 

@app.middleware("http")
async def request_details(request: Request, call_next):
    print(request["path"])
    print(request["method"])
    payload = await request.body()
    if payload: #kinaki get ma error dina sakxa by default get ma payload hudaina 
        print (json.loads(payload))
    start = perf_counter()
    app.state.request_count += 1 
    response = await call_next(request)
    end = perf_counter()
    print(end-start)
    return response
routers =[todo_router, user_router]
for router in routers:
    app.include_router(router=router, prefix="/api") 