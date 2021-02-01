let colors =(WrapppedComponents) =>{
    let pic = ['red', 'orange', 'blue', 'green', 'grey', 'brown'];
    let random = pic[Math.floor(Math.random()*5)]
    console.log(random);
    let colname = random + '-text';
    return (props) =>{
        return(
            <div className ={colname}>
                <WrapppedComponents {...props}/>
            </div>
        )
    }
}

export default colors