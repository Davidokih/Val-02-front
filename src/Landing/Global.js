import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pair: null,
    pairedWith: null
};

const Global = createSlice({
    name: "second",
    initialState,
    reducers: {
        createUser: (state, { payload }) => {
            state.pair = payload;
        },
        createPair: (state, { payload }) => {
            state.pairedWith = payload;
        }
    }
});

export const { createUser, createPair } = Global.actions;

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
