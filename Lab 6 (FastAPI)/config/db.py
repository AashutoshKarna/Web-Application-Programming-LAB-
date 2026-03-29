#to store the infor of database structure, like table name schema and constraints
from sqlalchemy import MetaData
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
#create async engine -> used to creae postgresql async connection
#asyncsession -> a database session
#async_session_maker -> new session for every db request 


#below, it inherits the base class which is used for each sqlalchemy model 

from sqlalchemy.orm import DeclarativeBase


#conneciton string 
DATABASE_URL = "postgresql+asyncpg://postgres:password@localhost:5432/todo_db"#schema name 
DEFAULT_SCHEMA_NAME = "TODO_S"

#tables automatically create in this schema 
metadata = MetaData(schema=DEFAULT_SCHEMA_NAME)

#parent class of all orm models 

class Base (DeclarativeBase):
    pass


#handles actual connection with the db 

engine = create_async_engine(
    DATABASE_URL,
    echo=True, #to print the queries in the terminal 
    future= True, #to enforce sqlalchemy 2.x behaviour
)

#used to create a new session for each db request

AsyncSessionLocal = async_sessionmaker[AsyncSession](
    bind=engine,
    class_= AsyncSession,
    expire_on_commit=False,  #so that our data is available even after the commit 
)

#fastapi automaticallyt opens and closes the session for each request 
async def get_db():
    async with AsyncSessionLocal() as session:  #will close automatically
        yield session  #session of db request