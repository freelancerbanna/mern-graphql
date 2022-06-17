import Link from "next/link";

import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Clients = ({ clients }: any) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-center bg-blue-700">
                    <th
                      className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-l border-transparent
                           "
                    >
                      ID
                    </th>
                    <th
                      className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                    >
                      Name
                    </th>
                    <th
                      className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                    >
                      Email
                    </th>
                    <th
                      className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                    >
                      Phone
                    </th>
                    <th
                      className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                {clients.map((client: any, id: number) => (
                  <tbody key={id}>
                    <tr>
                      <td
                        className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                      >
                        {id + 1}
                      </td>
                      <td
                        className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                      >
                        {client?.name}
                      </td>
                      <td
                        className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                      >
                        {client?.email}
                      </td>
                      <td
                        className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                      >
                        {client?.phone}
                      </td>

                      <td
                        className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           flex items-center justify-evenly
                           "
                      >
                        <Link href="/">
                          <a className="flex items-center justify-center bg-[#1d4ed852] rounded-[50%] w-10 h-10">
                            <BiEditAlt />
                          </a>
                        </Link>
                        <Link href="/">
                          <a className="flex items-center justify-center bg-[#efbcbcc2] rounded-[50%] w-10 h-10">
                            <MdDelete />
                          </a>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
