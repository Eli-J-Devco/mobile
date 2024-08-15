/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {Modal} from 'react-native';

interface IMyModalProps {
  visible: boolean;
  children: React.ReactNode;
}

const MyModal = ({visible, children}: IMyModalProps) => {
  return (
    <Modal transparent visible={visible} animationType="none">
      {children}
    </Modal>
  );
};

export default MyModal;
