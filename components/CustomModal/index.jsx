import React  from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { LuMoveRight } from "react-icons/lu";

export default function CustomModal({ children , modalTitle}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("center");
  const [backdrop, setBackdrop] = React.useState('blur')

  return (
    <>
      <Button onPress={onOpen}
      className="dark:bg-zinc-800 flex items-center justify-center mt-6 light:bg-zinc-300"
      >Ver todos os detalhes
      <LuMoveRight className="mt-.5" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement={modalPlacement}  backdrop={backdrop} >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 mt-4 text-2xl">
                {modalTitle}
              <div className="w-full h-[4px]  bg-gradient-to-r from-[#ee9c2e] via-[#85adb5]  to-[#ee9c2e] mt-2"></div>
              </ModalHeader>
              <ModalBody >
             {children}
              </ModalBody>
              <ModalFooter>
              
                <Button color="default" onPress={onClose}>
                  Fechar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
