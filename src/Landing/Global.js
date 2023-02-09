import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    namePair: null
};

const Global = createSlice({
    name: "second",
    initialState,
    reducers: {
        createUser: (state, { payload }) => {
            state.namePair = payload;
        }
    }
});

export const { createUser } = Global.actions;

export default Global.reducer;

// const handleSubmit = () => {
//     axios.post(`${URL}/create`, { name: name }).then((res) => {

//       dispatch(createUser(res.data.data));
//       console.log(res.data.data);
//     }).catch((err) => {
//       alert(err.message);
//     });

//     swal({
//       title: "Good job!",
//       text: "Your name as been added to the list",
//       icon: "success",
//       button: "Ok",
//     });
//   };

//   useEffect(() => {
//     axios.get(`${URL}/get`).then((res) => {
//       console.log(res);
//     });
//   }, []);
