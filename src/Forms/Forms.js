import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

function Forms() {
    const [user, setUser] = useState()
    const [pass, setPass] = useState()
    const [userErr, setUserErr] = useState(false)
    const [passErr, setPassErr] = useState(false)
    function loginHendle(e) {
        e.preventDefault()
        if (user.length < 2 || pass.length < 8) {
            alert("Please Fill Proper")
        }
        else {
            alert("Successfully")
        }
    }
    function useHendle(e) {
        let item = e.target.value
        if (item.length < 2) {
            setUserErr(true)
        }
        else {
            setUserErr(false)
        }
        setUser(item)
    }
    function passHendle(e) {
        let item = e.target.value
        if (item.length < 8) {
            setPassErr(true)
        }
        else {
            setPassErr(false)
        }
        setPass(item)
    }
    return (
        <div>
            <Container>
                <h1>Login</h1>
                <Form onSubmit={loginHendle}>
                    <div className="mt-2">
                        <label className="me-3">User Name</label>
                        <input type="text" placeholder="Enter Your name" onChange={useHendle} />
                    </div>
                    {userErr ? <span className="text-danger">Invalid User</span> : null}
                    <div className="mt-2">
                        <label className="me-3">Password</label>
                        <input type="password" placeholder="Enter your Password" onChange={passHendle} />
                    </div>
                    {passErr ? <span className="text-danger">Password must 8 Character</span> : null}
                    <div className="mt-2">
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default Forms;