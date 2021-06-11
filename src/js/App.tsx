import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Chat } from './components/Chat'

const useStyles = makeStyles(theme => ({
  root: {
    width: '90vw',
    margin: '0 auto',
  },
}))

export const App = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <Chat />
      </div>
    </>
  )
}
