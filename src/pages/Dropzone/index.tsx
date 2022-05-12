import { FC } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone: FC = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const getFiles = () => {
    const formData = new FormData();
    Promise.all(
      acceptedFiles.map(
        (file: File) =>
          new Promise((res, rej) => {
            if (file.size > 0) {
              formData.append("files", file);
              res(file);
            } else {
              rej();
            }
          })
      )
    ).then((files) => {
        // to uploadFiles
    });
  };

  const files = acceptedFiles.map((file: File, index) => {
    return (
      <li key={index}>
        {file.name} - {file.size} bytes
      </li>
    );
  });
  return (
    <section className="container">
      <div
        style={{ padding: 12, background: "#FFF" }}
        {...getRootProps({ className: "dropzone" })}
      >
        <input {...getInputProps()} />
        <p>点击、拖拽文件上传</p>
      </div>
      {/* <button onClick={getFiles}>获取上传文件</button> */}
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
};

export default Dropzone;
