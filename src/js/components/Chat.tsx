import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { TextField, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  form: {
    margin: '0 auto',
    padding: theme.spacing(1),
  },
  btn: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}))

export const Chat = () => {
  const classes = useStyles()
  const [msg, setMsg] = useState<string[]>([])
  const [inputMsg, setInputMsg] = useState<string>('')

  const clickMsg = () => {
    setMsg(msg.concat(inputMsg))
    setInputMsg('')
  }

  return (
    <>
      <p>Hello World</p>
      {/* <form className={classes.form}> */}
      <TextField
        id="outlined-basic"
        label="msg"
        variant="outlined"
        value={inputMsg}
        onChange={e => setInputMsg(e.target.value)}
      />
      <Button variant="contained" color="primary" className={classes.btn} onClick={clickMsg}>
        SEND
      </Button>
      {/* </form> */}
      <div>
        {msg.map((message, i) => {
          return <div key={i}>{message}</div>
        })}
      </div>
    </>
  )
}
