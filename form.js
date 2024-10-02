import React from 'react';
import { useState } from 'react'
import { useUserContext } from './usercontext';
const FormComponent = () => {

    const {Addusers}= useUserContext();
    
    const [name,setName]=useState('');
    const [passwd,setPasswd]=useState('');
    const [gender,setGender]=useState('');
    const [branch,setBranch]=useState('');
    const [add,setAdd]=useState('');
    const [pic,setPic]=useState('');
    const [imgurl,setImgurl]=useState('');
    const [err_name,setErr_Name]=useState(false);
    const [err_passwd,setErr_Passwd]=useState(false);
    const [err_gender,setErr_Gender]=useState(false);
    const [err_branch,setErr_Branch]=useState(false);
    const [err_add,setErr_Add]=useState(false);
    const [err_pic,setErr_Pic]=useState(false);
    const [intr,setIntr]=useState({Sports:false,
                                   Reading:false,
                                   Travelling:false});

    const handleName = (e) => {
        let val=e.target.value;
        setName(val);
        val===''?setErr_Name(true):setErr_Name(false)
    }
    const handlePasswd = (e) => {
        let val=e.target.value;
        setPasswd(val);
        val.length<8?setErr_Passwd(true):setErr_Passwd(false)
    }
    const handleGender = (e) => {
        let val=e.target.value;
        setGender((prevState)=>prevState=val);
        (val==='')?setErr_Gender(true):setErr_Gender(false)
    }
    const handleBranch = (e) => {
        let val=e.target.value;
        setBranch(val);
        (val===''||val==='Select One')?setErr_Branch(true):setErr_Branch(false)
    }
    const handleAdd = (e) => {
        let val=e.target.value;
        setAdd(val);
        val===''?setErr_Add(true):setErr_Add(false)
    }
    const handlePic = (e) => {
        let val=e.target.value;
        setPic(val);
        setImgurl(URL.createObjectURL(e.target.files[0]))
        val===''?setErr_Pic(true):setErr_Pic(false)
    }
    const handleIntr = (e) => {
        setIntr(
            (prevState) => ({...prevState, [e.target.value]: e.target.checked})
        );
    }
    const handleReset = () => {
        setName('');
        setPasswd('');
        setGender('');
        setBranch('');
        setAdd('');
        setPic('');
        setErr_Name(false);
        setErr_Passwd(false);
        setErr_Gender(false);
        setErr_Branch(false);
        setErr_Add(false);
        setErr_Pic(false);
        setIntr({Sports:false,
                Reading:false,
                Travelling:false});
    }

    const handleSubmit = (e) => {
         e.preventDefault();
         let hasError=false;
         const ints = Object.entries(intr)
                    .filter(([key,value])=>value)
                    .map(([key])=>key);
        if (name===''){
            setErr_Name(true);
            hasError=true;
        }
        if (passwd.length<8){
            setErr_Passwd(true);
            hasError=true;
        }
        if (gender===''){
            setErr_Gender(true);
            hasError=true;
        }
        if (branch==='' || branch==='Select One'){
            setErr_Branch(true);
            hasError=true;
        }
        if (add===''){
            setErr_Add(true);
            hasError=true;
        }
        if (pic===''){
            setErr_Pic(true);
            hasError=true;
        }
        if (hasError)
           {
            alert("Fill the entire form");  
           }
        else{
            const formdata={"Name":name,
                               "Password":passwd,
                               "Gender":gender,
                               "Branch":branch,
                               "Address":add,
                               "Photo":imgurl,
                               "Interests":ints};
            
            Addusers(formdata);
            alert(`Registered Successfully with values:\n
                Name:${formdata.Name}\n
                Gender: ${formdata.Gender}\n
                Branch: ${formdata.Branch}\n
                Address: ${formdata.Address}\n
                Photo: ${formdata.Photo}\n
                Interests: ${formdata.Interests.join(', ')}
            `);
            }
    }
    return(
      
         <form className="formcontainer" onSubmit={handleSubmit} onReset={handleReset}>
            <div className="namebox">
                <label className="namebox" htmlFor="namefld">Name:</label>
                <input className="namebox" id="namefld" type="text" value={name} onChange={handleName}/>
                <span style={{color:'red'}}>{err_name?"Enter name.":''}</span>
            </div>
            <div className="passwdbox">
                <label className="namebox" htmlFor="passfld">Password:</label>
                <input className="namebox" id="passfld" type="password" value={passwd} onChange={handlePasswd}/>
                <span style={{color:'red'}}>{err_passwd?"Password min 8 characters.":''}</span>
            </div>
            <div className="genderbox">
                <label className="namebox" htmlFor="gender">Gender:</label>
                <div id="gender">
                  <input className="namebox" name="genderfld" type="radio" value="Male" onChange={handleGender}/>M
                  <input className="namebox" name="genderfld" type="radio" value="Female" onChange={handleGender}/>F
                  <span style={{color:'red'}}>{err_gender?"Select One.":''}</span>
                </div>
            </div>
            <div className="branchbox">
                <label className="namebox" htmlFor="branch">Branch:</label>
                <select className="namebox" id="branch" onChange={handleBranch}>
                    <option>Select One</option>
                    <option>Automobile</option>
                    <option>Civil</option>
                    <option>Computer Science</option>
                    <option>Electronics & Communication</option>
                    <option>Mechanical</option>
                </select>
                <span style={{color:'red'}}>{err_branch?"Select Branch.":''}</span>
            </div>
            <div className="addbox">
                <label className="namebox" htmlFor="address">Address:</label>
                <textarea className="namebox" id="address" rows="6" cols="30" value={add} onChange={handleAdd}/>
                <span style={{color:'red'}}>{err_add?"Enter address.":''}</span>
            </div>
            <div className="imagebox">
                <label className="namebox" htmlFor="image">Photo:</label>
                <input type="file" className="namebox" id="image" accept=".jpg,.jpeg,.png,.gif" onChange={handlePic}/>
                <span style={{color:'red'}}>{err_pic?"Upload your photo.":''}</span>
                {pic?<img src={imgurl} style={{height:'100px',width:'100px'}} alt='preview'/>:''}
            </div>
            <div className="interestsbox">
                <label className="namebox" htmlFor="interests">Interests:</label>
                <div className="interests">
                  <input type="checkbox" className="namebox" value="Sports" checked={intr.Sports} onChange={handleIntr}/>Sports{'\u0020'}
                  <input type="checkbox" className="namebox" value="Reading" checked={intr.Reading} onChange={handleIntr}/>Reading{'\u0020'}
                  <input type="checkbox" className="namebox" value="Travelling" checked={intr.Travelling} onChange={handleIntr}/>Travelling
                </div>
            </div>
            <div className="btnbox">
                <input type="submit" className="namebox" value="SUBMIT"/>{'\u0020'}
                <input type="reset" className="namebox" value="CLEAR"/>
            </div>
        </form>
        
    );
}

export default FormComponent;