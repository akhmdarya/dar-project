import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
     const styles = {
        ul: {
            margin:10,
            width: '25ch',
            backgroundColor: "white",
          zIndex:10,
        },
        butt:{
            margin:10
        }
    }

class BasicTextFields extends React.Component   {

    constructor(props) {
        super(props);
        this.state = {value: '',urlValid:urlIsValid}
        var value= props.value;
        var urlIsValid = this.validateUrl(value);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
      }
      validateUrl(value){
        
        return value.length>=3;
        

      }
      handleChange(event) {
        var val = event.target.value;
        var valid= this.validateUrl(val);
        this.setState({value: event.target.value, urlValid: valid});  
  
      }
      handleSubmit(event) {
        if(this.state.urlValid===true){
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
        this.setState({value: ""});
        }
        else{
          alert("Недопустимая ссылка");
        }
   
      }
      render(){

      return(
    <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <div className="input">
      <TextField  style={styles.ul} value={this.state.value} onChange={this.handleChange} id="outlined-basic" label="Outlined" variant="outlined" />
     </div>

      <Button type='submit'
        variant="contained"
        color="primary"
       style={styles.butt}
        endIcon={<SaveIcon />}
      >
        Check Web-Site!
      </Button>
    </form>
      )
      }
}
export default BasicTextFields

