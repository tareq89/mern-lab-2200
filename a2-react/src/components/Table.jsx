import React, { useState } from "react";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal";
import { Form } from "./Form/Form";

const EditButton = ({ data }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <Form formData={data} />
      </Modal>
      <button onClick={() => setIsOpenModal(true)}>Edit</button>
    </>
  );
};

export const Table = ({ data, onDelete, isLoading }) => {
  if (isLoading) return <Loader />;
  return (
    <>
      {data && <h1>Total found {data.length}</h1>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>Degree</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x, i) => {
            return (
              <tr key={i}>
                <td>{x.name}</td>
                <td>{x.gender}</td>
                <td>{x.nationality}</td>
                <td>{x.degree.toString()}</td>
                <td>
                  <EditButton data={x} />
                  <button onClick={() => onDelete(x.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
