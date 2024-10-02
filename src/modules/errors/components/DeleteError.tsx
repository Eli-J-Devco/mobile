import React, {useState} from 'react';
import IconButton from '../../../common/components/button/IconButton';
import ModalConfirm from '../../../common/components/modal/ModalConfirm';

const DeleteError = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton iconName="trash" onPress={() => setOpen(true)} />
      <ModalConfirm
        visible={open}
        title="Do you want to delete this error ?"
        onCancel={() => {
          setOpen(false);
        }}
        onOk={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default DeleteError;
