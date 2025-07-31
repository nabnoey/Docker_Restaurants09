import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
const Update = () => {
  //Get ID from URL
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({
    title: "",
    type: "",     
    img: "",
  });

  //2.GEt Restaurant
  useEffect(() => {
    // call API: getAllRestaurants
    const getAllRestaurant = async () => {
      try {
        const response = await RestaurantService.getAllRestaurant();

        if (response.status === 200) {
          setRestaurants(response.data);
          SetFilterRestaurants(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get All Restaurant",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };

    getAllRestaurant();
  }, []); // ✅ อย่าลืมใส่ dependency array เพื่อให้เรียกแค่ตอน mount

  return (
    <div className="container mx-auto">
      <div class="relative flex flex-col justify-center h-screen overflow-hidden">
        <div class="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
          <h1 class="text-2xl font-semibold text-center text-gray-700 mb-6">
            Update Item
          </h1>
          <form class="space-y-4">
            <div>
              <label class="label">
                <span class="text-base label-text">Title</span>
              </label>

              <input
                type="text"
                name="title"
                value={restaurant.title}
                placeholder="Enter title"
                class="w-full input input-bordered"
                onChange={handleChange}
              />
            </div>

            <div>
              <label class="label">
                <span class="text-base label-text">Type</span>
              </label>
              <input
                type="text"
                placeholder="Enter type"
                class="w-full input input-bordered"
                name="type"
                value={restaurant.type}
                onChange={handleChange}
              />
            </div>

            <div>
              <label class="label">
                <span class="text-base label-text">Image URL</span>
              </label>
              <input
                type="text"
                ClassName="grow"
                class="w-full input input-bordered"
                onChange={handleChange}
                placeholder="Restaurant Img"
                value={restaurant.img}
                name="img"
              />

              {restaurant.img && (
                <div ClassName="flex items-center gap-2">
                  <img ClassName="h-32" src={restaurant.img}></img>
                </div>
              )}
            </div>

            <div class="flex justify-center items-center my-6 space-x-4">
              <button
                type="submit"
                class="btn bg-green-500 text-white px-6"
                onClick={handleSubmit}
              >
                Add
              </button>
              <a
                href={"/"}
                type="button"
                class="btn bg-red-500 text-white px-6"
              >
                Cancel
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
