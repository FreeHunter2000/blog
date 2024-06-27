import {connect, ConnectOptions} from 'mongoose';

export const dbConnect = () => {
  connect("mongodb+srv://TestUser:1234@cluster0.nonowk1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;", {
  } as ConnectOptions).then(
    () => console.log("connect successfully"),
    (error) => console.log(error)
  )
}
