import { Button, Modal, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DashUsers() {
  const { currentUser } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/user/getusers`);
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          if (data.users.length < 5) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchUsers();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = users.length;
    try {
      const res = await fetch(`/api/user/getusers?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok) {
        setUsers((prev) => [...prev, ...data.users]);
        if (data.users.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  //   const handleDeleteUser = async () => {
  //     setShowModal(false);
  //     try {
  //       const res = await fetch(
  //         `/api/user/deleteuser/${userIdToDelete}/${currentUser._id}`,
  //         {
  //           method: "DELETE",
  //         }
  //       );
  //       const data = await res.json();
  //       if (!res.ok) {
  //         console.log(data.message);
  //       } else {
  //         setUserPosts((prev) =>
  //           prev.filter((post) => post._id !== postIdToDelete)
  //         );
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  const handleDeleteUser = async () => {};

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-4 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-500">
      {currentUser.isAdmin && users.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Date created</Table.HeadCell>
              <Table.HeadCell>User image</Table.HeadCell>
              <Table.HeadCell>Username</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Admin</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            {users.map((user) => (
              <Table.Body key={user._id} className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : "21/02/2024"}
                  </Table.Cell>
                  <Table.Cell>
                    <img
                      src={user.profilePicture}
                      alt={user.username}
                      className="w-12 h-12 object-cover bg-gray-500 rounded-full"
                    ></img>
                  </Table.Cell>
                  <Table.Cell>{user.username}</Table.Cell>
                  <Table.Cell className="text-gray-500 dark:text-white">
                    {user.email}
                  </Table.Cell>
                  <Table.Cell className="text-gray-500 dark:text-white">
                    {user.isAdmin ? (
                      <FaCheck className="text-green-500"></FaCheck>
                    ) : (
                      <FaTimes className="text-red-500"></FaTimes>
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setUserIdToDelete(user._id);
                      }}
                      className="font-medium text-red-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 self-center text-sm py-7"
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no users yet!</p>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto"></HiOutlineExclamationCircle>
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this user?
            </h3>
            <div className="flex justify-center gap-6">
              <Button
                className="bg-gradient-to-r from-pink-400 to-red-400 hover:from-red-500 hover:to-red-800"
                onClick={handleDeleteUser}
              >
                Yes, I'm Sure
              </Button>
              <Button
                gradientDuoTone="greenToBlue"
                onClick={() => setShowModal(false)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
