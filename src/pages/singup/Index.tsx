export default function SingUp() {
    return (
      <>
        <div className="bg-gray-200">
          <div className="mt-10 sm:mt-0 h-screen w-5/6 ml-40">
            <div className="md:grid md:grid-cols-3 md:gap-6">              
              <div className="ml-4 md:mt-0 md:col-span-3">
                <form action="#" method="POST">
                  <div className="mt-10 shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Nome
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
    
                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Sobrenome
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
    
                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                            Email
                          </label>
                          <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Senha
                          </label>
                          <input
                            type="text"
                            name="password"
                            id="password"
                            autoComplete="email"
                            className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                            País
                          </label>
                          <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                          >
                            <option>Brasil</option>
                            <option>Estados Unidos</option>
                            <option>Canada</option>
                            <option>México</option>
                          </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="userTyper" className="block text-sm font-medium text-gray-700">
                            Tipo de Usuário
                          </label>
                          <select
                            id="userTyper"
                            name="userTyper"
                            autoComplete="country-name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                          >
                            <option>Cliente</option>
                            <option>Provedor</option>
                          </select>
                        </div>
    
                        <div className="col-span-6">
                          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                            Endereço
                          </label>
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
    
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            Cidade
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
    
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                            Estado
                          </label>
                          <input
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
    
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                            CEP/CNPJ
                          </label>
                          <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                      >
                        Salvar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  