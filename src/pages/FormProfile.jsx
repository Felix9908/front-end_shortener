import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { RiSendPlaneFill } from "react-icons/ri";

const FormProfile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://your-api-endpoint.com/profile', data); // cambiar el link para enlazar con la base de datos 

      // Manejo de diferentes códigos de respuesta
      switch (response.status) {
        case 200:
          alert("Form submitted successfully: OK (200)");
          break;
        case 202:
          alert("Form submitted: Accepted (202)");
          break;
        default:
          alert(`Unexpected status: ${response.status}`);
      }
    } catch (error) {
      // Manejo de errores por códigos de estado HTTP
      if (error.response) {
        switch (error.response.status) {
          case 400:
            alert("Bad Request (400)");
            break;
          case 404:
            alert("Not Found (404)");
            break;
          case 500:
            alert("Internal Server Error (500)");
            break;
          default:
            alert(`Unexpected error: ${error.response.status}`);
        }
      } else {
        alert("Network Error or Server not reachable");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Profile</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                {...register('firstName', { required: true })}
                placeholder="Enter your first name"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              />
              {errors.firstName && <span className="text-red-500 text-sm">First name is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                {...register('lastName', { required: true })}
                placeholder="Enter your last name"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              />
              {errors.lastName && <span className="text-red-500 text-sm">Last name is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                {...register('address', { required: true })}
                placeholder="Enter your address"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              />
              {errors.address && <span className="text-red-500 text-sm">Address is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Address 2</label>
              <input
                {...register('address2', { required: true })}
                placeholder="Enter your address 2"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              />
              {errors.address2 && <span className="text-red-500 text-sm">Address 2 is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                {...register('city', { required: true })}
                placeholder="Enter your city"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              />
              {errors.city && <span className="text-red-500 text-sm">City is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">State</label>
              <input
                {...register('state', { required: true })}
                placeholder="Enter your state"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              />
              {errors.state && <span className="text-red-500 text-sm">State is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input
                {...register('country', { required: true })}
                placeholder="Enter your country"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              />
              {errors.country && <span className="text-red-500 text-sm">Country is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="tel"
                {...register('mobile', {
                  required: 'Mobile number is required',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Mobile number must be numeric'
                  }
                })}
                placeholder="Enter your mobile number"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              />
              {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile.message}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Withdrawal Method</label>
              <select
                {...register('withdrawalMethod', { required: true })}
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              >
                <option value="MLC card">MLC card</option>
                <option value="CUP card">CUP card</option>
              </select>
              {errors.withdrawalMethod && <span className="text-red-500 text-sm">Withdrawal method is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Withdrawal Account</label>
              <input
                {...register('withdrawalAccount', { required: true })}
                placeholder="Enter your withdrawal account"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              />
              {errors.withdrawalAccount && <span className="text-red-500 text-sm">Withdrawal account is required</span>}
            </div>
          </div>

          {/* Withdrawal Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Withdrawal Details</h3>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left border-b border-gray-300">Withdraw Method</th>
                  <th className="p-3 text-left border-b border-gray-300">Minimum Withdraw Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-300">MLC card</td>
                  <td className="p-3 border-b border-gray-300">$10.00</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-300">CUP card</td>
                  <td className="p-3 border-b border-gray-300">$5.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Informational Text */}
          <div className="mb-6">
            <p className="text-sm text-gray-700 mb-2">
              To withdraw in MLC, please enter the BANDEC or BPA card number in MLC.
            </p>
            <p className="text-sm text-gray-700">
              Insert the card in CUP; the exchange rate is $270.00.
            </p>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#7828c8] text-white p-2 rounded-lg hover:bg-[#7828c8e1] flex flex-row items-center justify-center"
            >
              <RiSendPlaneFill className="mr-2" />
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormProfile;
