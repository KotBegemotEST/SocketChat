const users = [];
const addUser = ({id,name,room}) => {
    name = name.trim().toLowerCase()
    room = room.trim().toLowerCase()

    const exisingUser = users.find((user)=>user.room === room && user.name === name)
    if(exisingUser){
        return{error:"username is taken"}
    }
    const user =  {id,name,room};
    users.push(user)
    return {user}
}


const removeUser = (id)=>{
    const index = users.findIndex((user)=>user.id === id)

    if(index !== -1){
        return users.splice(index,1)[0];
    }
}


const getUsers = (id)=>{
    users.find((user)=>user.id === id)
}

const getUsersInRoom = () =>{
    users.filter((users)=>users.room === room)
}

module.exports = {addUser,removeUser,getUsers,getUsersInRoom}