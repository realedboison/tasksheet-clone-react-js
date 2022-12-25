import { ClipLoader } from 'react-spinners';

export const SubmitLoader = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ClipLoader size={22} color="white" loading={true} />
      <span style={{ marginLeft: 10 }}>Hang on</span>
    </div>
  );
};
