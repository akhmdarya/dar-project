import { Button } from '@material-ui/core';
import { strict } from 'assert';
import React, { useEffect, useRef, useState } from 'react';
import AppContext from '../../shared/app.context';
import { checkEmail, checkEmptyUsername } from '../../shared/util';
import Profile from '../profile/Profile';
// import Button from '../button/Button';
import styles from './CommentForm.module.scss';

import { CommentTable } from './CommentTable';
import { ErrorsTable } from './ErrorsTable';
// import CommentContainer from './CommentList';


const CommentForm = (props: 
    { addComment: (arg0: {  username: string; email: string; comment: string; }) => void; }
    ) => {
    const initialFormState = { username: '', email: '',comment:"" }


    const [fields, setFields] = useState<{
        
        username: string;
        email: string;
        comment: string;
    }>({
        
        username: '',
        email: '',
        comment: ''
    });


    
    

    const onSubmit = () => {
        console.log('Form submitted', fields);
        // if (setError!=null){ 
        //     alert("SOMETHING WRONG")
        //     setFields(initialFormState);
        //     return
            
        // }
        props.addComment(fields);
        setFields(initialFormState);
        
    }

    

    const[message,setMessage]= useState<string>('');
    const [error, setError] = useState<string>("");

    // let info = [{ name: 'First Error'}];

    // const element = { name: 'Sally'};
    
    // info = [ ...info, element ];
    const [initialError ,setinitialError] = useState<{
     name:string,
    }>({
        name:'',
    
    });

    const errorsData = [
        
        {  name: 'Some err' },
        { name: 'other' },
      ]
      const newArray = errorsData.filter(errorsData => errorsData.name !== '')

      
  const [errors, setErrors] = useState(newArray)

  const addError = (error: {  name: string}) => {
  
    setErrors([...errors, error])
  }
 
    const clearMessages = () =>{
        setMessage('');
       
        setErrors([setinitialError]);
    
    }
   
    useEffect(() => {
        clearMessages();
        checkEmptyUsername(fields.username)
        checkEmail(fields.email)
        .then(res=> setMessage(res))
        .catch(element=> addError(element))
        setErrors([setinitialError]);
      
    }, [fields])

    const fieldChange = (fieldName: string, value: any) => {
        setFields(oldState => ({
            ...oldState,
            [fieldName]: value
        }));
    }

    return (
        <AppContext.Consumer>
        {({state: {profile}}) => profile ? 
            (<div className={styles.wrapper}>
                <div className={styles.user}>
                    <div className={styles.formControl}>
                        <label>Username</label>
                        <input value={fields.username} name="username" type="text" onChange={e => fieldChange('username', e.target.value)} />
                    </div>
                    <div className={styles.formControl}>
                        <label>Email</label>
                        <input name="email" type="text" value={fields.email} onChange={e => fieldChange('email', e.target.value)} />
                    </div>
                    <Profile username={profile.username} avatar={profile.avatar} />
                </div>
                <div className={styles.comment}>
                    <div className={styles.formControl}>
                        <label>Comment</label>
                        <textarea name="comment" value={fields.comment} onChange={e => fieldChange('comment', e.target.value)} />
                    </div>
                </div>
                <div className={styles.controls}>
                    <button title="Submit" onClick={onSubmit} />
                </div>
            </div>
            ) : <div className={styles.wrapper}>Чтобы оставить комментарий войдите в аккаунт</div> }
        </AppContext.Consumer>

    
    )
}

export default CommentForm;
