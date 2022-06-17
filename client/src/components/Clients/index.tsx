const Clients = ({ clients }: any) => {
  console.log(clients);

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        {clients.map((client: any, id: number) => (
          <tbody>
            <tr>
              <td>{id + 1}</td>
              <td>{client?.name}</td>
              <td>{client?.email}</td>
              <td>{client?.phone}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Clients;
