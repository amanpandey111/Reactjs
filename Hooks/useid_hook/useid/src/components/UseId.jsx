import { useId } from 'react'

const UseId = () => {
    //! See here we have created the unique id for each and every input field
    // const username = useId()
    // const email = useId()
    // const password = useId()
    // console.log(username,email);
    // return (
    //     <div>
    //         <form>
    //             <div>
    //                 <label htmlFor={username}>Username :</label>
    //                 <input type="text" id={username} name='name' />
    //             </div>
    //             <div>
    //                 <label htmlFor={email} >Email :</label>
    //                 <input type="text" id={email} name='email' />
    //             </div>
    //             <div>
    //                 <label htmlFor={password}>Password :</label>
    //                 <input type="password" id={password} name='password' />
    //             </div>
    //         </form>
    //     </div>
    // )


    //todo Here we will create a single uniqueId and with the halpp of that id will generate new id's
    const id1 = useId()
    const id2 = useId()
    const id3 = useId()
    const id4 = useId()
    const id5 = useId()
    const id6 = useId()
    console.log(id1);
    console.log(id2);
    console.log(id3);
    console.log(id4);
    console.log(id5);
    console.log(id6);
    return (
        <div>
            <form>
                <div>
                    <label htmlFor={id1+"username"}>Username :</label>
                    <input type="text" id={id1+"username"} name='name' />
                </div>
                <div>
                    <label htmlFor={id1+"email"} >Email :</label>
                    <input type="text" id={id1+"email"} name='email' />
                </div>
                <div>
                    <label htmlFor={id1+"password"}>Password :</label>
                    <input type="password" id={id1+"password"} name='password' />
                </div>
            </form>
        </div>
    )
}

export default UseId