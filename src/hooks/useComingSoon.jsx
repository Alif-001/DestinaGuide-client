import Swal from "sweetalert2";

const useComingSoon = () => {
  const handleComingSoon = () => {
    Swal.fire({
      title: "🚧 Feature Coming Soon!",
      html: `
        <p>We’re putting the finishing touches on this functionality.</p>
        
      `,
      icon: "info",
      background: "#1e1e1e",
      color: "#fff",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok",
      customClass: { popup: "swal2-dark" },
    });
  };
  return { handleComingSoon };
};

export default useComingSoon;
