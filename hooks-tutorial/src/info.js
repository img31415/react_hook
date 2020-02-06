import React, {useEffect, useState} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(()=>{   // 두번째 파라미터 배열에 무엇을 넣느냐에 따라 실행되는 조건이 달라짐.
        console.log('rendering completed')
        console.log({
            name,
            nickname
        })
    },[name])

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임: </b>
                    {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;