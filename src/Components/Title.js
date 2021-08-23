import { Alert } from 'react-bootstrap'
import React from 'react'

const Title = () => {
    return (
        <div>
            <Alert style={{height:'100px',alignItems:'center',paddingTop:'30px'}} variant="secondary"> 
            <h3>Hello this is A Todo App made with Redux ToolKit !</h3>
            </Alert>
        </div>
    )
}

export default Title
