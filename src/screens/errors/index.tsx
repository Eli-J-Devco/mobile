import React from 'react'
import PrimaryLayoutDetailItem from '../../layouts/PrimaryLayoutDetailItem'
import Errors from '../../modules/errors'

const ErrorsScreen = () => {
  return (
    <PrimaryLayoutDetailItem title='Erros' >
      <Errors />
    </PrimaryLayoutDetailItem>
  )
}

export default ErrorsScreen