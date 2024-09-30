import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Modal, ModalContent, ModalHeader, ModalBody, Button } from "@nextui-org/react";
import ModalContext from "../../Context/ModalContext";
import api from "../../api/axios";

const ModalAcortarLink = () => {
  const { isOpen, backdrop, onClose } = useContext(ModalContext);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/shorten', data);
      console.log(response.data);  
      reset();  
      onClose();  
    } catch (error) {
      console.error("Error al acortar el link", error);
    }
  };

  return (
    <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-xl font-semibold">
              Acortar Link
            </ModalHeader>
            <ModalBody className="space-y-4">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Link Original
                  </label>
                  <input
                    type="url"
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="https://example.com"
                    {...register("originalUrl", { required: "El link original es requerido" })}
                  />
                  {errors.originalUrl && (
                    <span className="text-red-500 text-sm">{errors.originalUrl.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Enunciado
                  </label>
                  <textarea
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Escribe el enunciado aquí (puedes usar emojis 😊)"
                    rows={3}
                    {...register("description", { required: "El enunciado es requerido" })}
                  />
                  {errors.description && (
                    <span className="text-red-500 text-sm">{errors.description.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Tipo de Noticia
                  </label>
                  <select
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    {...register("newsType", { required: "El tipo de noticia es requerido" })}
                  >
                    <option value="" disabled>Selecciona un tipo</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="deportes">Deportes</option>
                    <option value="politica">Política</option>
                    <option value="entretenimiento">Entretenimiento</option>
                  </select>
                  {errors.newsType && (
                    <span className="text-red-500 text-sm">{errors.newsType.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Dominio
                  </label>
                  <select
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    {...register("domain", { required: "El dominio es requerido" })}
                  >
                    <option value="" disabled>Selecciona un dominio</option>
                    <option value="example.com">example.com</option>
                    <option value="mynews.com">mynews.com</option>
                    <option value="short.ly">short.ly</option>
                  </select>
                  {errors.domain && (
                    <span className="text-red-500 text-sm">{errors.domain.message}</span>
                  )}
                </div>

                {/* Botón de envío dentro del formulario */}
                <div className="flex justify-end space-x-2">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancelar
                  </Button>
                  <Button color="primary" type="submit">
                    Acortar Link
                  </Button>
                </div>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalAcortarLink;
