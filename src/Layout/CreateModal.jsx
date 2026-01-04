import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AunthContext } from "../Auth/AuthProvider";
import Loader from "../Component/Loader";

const CreateModal = () => {
  const { user } = useContext(AunthContext); // Get user context
  const [isloading, setloading] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const navigate = useNavigate();


   const validate = (data) => {
    const nextErrors = {};
    if (!data.name) nextErrors.name = "Name is required.";
    if (!data.framework) nextErrors.framework = "Framework is required.";
    if (!data.useCase) nextErrors.useCase = "Use case is required.";
    if (!data.dataset) nextErrors.dataset = "Dataset is required.";
    if (!data.description) nextErrors.description = "Description is required.";
    if (!data.image) nextErrors.image = "Image URL is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    const form = e.target;
    const name = form.name.value;
     const createdBy = user?.email || "";  // Directly set createdBy to user.email
    const framework = form.framework.value;
    const useCase = form.useCase.value;
    const dataset = form.dataset.value;
    const description = form.description.value;
    const image = form.imageUrl.value;

    const formData = {
      name,
      createdBy,
      framework,
      useCase,
      dataset,
      description,
      image,
    };
    if (!validate(formData)) {
      setloading(false);
      return;
    }

    fetch("https://ai-inventing-manager-server.vercel.app/mymodal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        Swal.fire({
          title: "Do you want to add this modal?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
            response.json();
            setStatus("Model created successfully.");
            navigate("/models");
            return <Loader />;
           
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      })
      .then((data) => console.log("Success:", data))
      .catch((error) => {
        console.error("Error:", error);
       setErrors({ general: "Something went wrong while saving. Please try again." });
      })
      .finally(() => setloading(false));
  };

  return (
    <div className="form-container">
      <h1 className="form-title">AI Information</h1>

    {status && (
        <div className="mb-4 p-3 rounded-xl border border-emerald-400/40 bg-emerald-500/10 text-emerald-400 text-sm" aria-live="polite">
          {status}
        </div>
      )}
      {Object.values(errors).length > 0 && (
        <div className="mb-4 p-3 rounded-xl border border-red-400/40 bg-red-500/10 text-red-200 text-sm" aria-live="assertive">
          {Object.values(errors)[0]}
        </div>
      )}
      {isloading && (
        <div className="space-y-2 mb-4" aria-hidden="true">
          <div className="h-3 rounded-full skeleton"></div>
          <div className="h-3 rounded-full skeleton w-2/3"></div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required aria-invalid={Boolean(errors.name)} />
        </div>

        {/* Set the email field as read-only and pre-populate with user.email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user?.email || ""} // Set the value to the user email from context // Set the value to the user email from context
            readOnly // Make it read-only so the user can't change it
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="framework">Framework</label>
          <input type="text" id="framework" name="framework" required aria-invalid={Boolean(errors.framework)} />
        </div>

        <div className="form-group">
          <label htmlFor="useCase">Use Case</label>
           <input type="text" id="useCase" name="useCase" required aria-invalid={Boolean(errors.useCase)} />
        </div>

        <div className="form-group">
          <label htmlFor="dataset">Dataset</label>
         <input type="text" id="dataset" name="dataset" required aria-invalid={Boolean(errors.dataset)} />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
         <input type="text" id="description" name="description" required aria-invalid={Boolean(errors.description)} />
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input type="url" id="imageUrl" name="imageUrl" required aria-invalid={Boolean(errors.image)} />
        </div>

        <button type="submit" className="submit-btn" disabled={isloading}>
          {isloading ? "Submitting..." : "CREATE YOUR MODAL"}
        </button>
      </form>
    </div>
  );
};

export default CreateModal;
