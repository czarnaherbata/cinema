import { Component } from "react";

class EditForm extends Component{
    constructor(props){
        super(props)
    this.state={
        editTitle:props.noteList[props.title].title,
        editYear:props.noteList[props.year].year,
        editDuration:props.noteList[props.duration].duration
    }
}


onChange(e)
{
    var name=e.target.id;
    this.setState({
        [name]:e.target.value
    })
}


render()
{
    const{index, moviesList, editMovie, onClose}=this.props
    return(
        <div>
        <div className="titleEdit">
            <label className="titleEdit">Title</label>
            <input type="text" id="editTitle" defaultValue={moviesList[index].title} onChange={(e)=>this.onChange(e)}/>
        </div>

<div className="yearEdit">
<label className="yearEdit">Title</label>
<input type="text" id="editYear" defaultValue={moviesList[index].year} onChange={(e)=>this.onChange(e)}/>
</div>
</div>
    )
}


}