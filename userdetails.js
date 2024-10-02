import { useLocation } from 'react-router-dom'
import { UseUser } from './usercontext'
const UserDetails = () => {
const loc=useLocation();
const uname=loc.state?loc.state.uname:{}
const ucontext=UseUser()
const user=ucontext.userlist.filter((u)=>u.Name===uname)[0]

if (!uname){
return <h1 align="center">User not specified</h1>
}

else{
return(
<table className="details">
<tr align="center">
<td colspan="2">
<img src={user.Photo} alt={user.Name} height="150" width="150"/>
</td>
</tr>
<tr>
<th align="right">Name:</th>
<th align="left">{user.Name}</th>
</tr>
<tr>
<th align="right">Gender:</th>
<th align="left">{user.Gender}</th>
</tr>
<tr>
<th align="right">Branch:</th>
<th align="left">{user.Branch}</th>
</tr>
<tr>
<th align="right">Address:</th>
<th align="left">{user.Address}</th>
</tr>
<tr>
<th align="right">Interests:</th>
<th align="left">{user.Interests.join(', ')}</th>
</tr>
</table>
);
}
}
export default UserDetails


