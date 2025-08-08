import React from 'react'

const GetCheckBox = () => {
    function handleInputChange(e){
        const{value,checked} = e.target;
        console.log(value,checked);
    }
  return (
    <div>
          <form action="">
            <div>
                <input type="checkbox" name='company' value="samsung"  onChange={handleInputChange} />
                <label htmlFor="">samsung</label>
            </div>
            <div>
                <input type="checkbox" name='company' value="samsung"  onChange={handleInputChange} />
                <label htmlFor="">Apple</label>
            </div>
            <div>
                <input type="checkbox" name='company' value="samsung"  onChange={handleInputChange} />
                <label htmlFor="">OnePlus</label>
            </div>
            <div>
                <input type="checkbox" name='company' value="samsung"  onChange={handleInputChange} />
                <label htmlFor="">Realme</label>
            </div>
            <div>
                <input type="checkbox" name='company' value="samsung"  onChange={handleInputChange} />
                <label htmlFor="">Xiomi</label>
            </div>
            <div>
                <input type="checkbox" name='company' value="samsung"  onChange={handleInputChange} />
                <label htmlFor="">Motorola</label>
            </div>
            <div>
                <input type="checkbox" name='company' value="samsung" onChange={handleInputChange} />
                <label htmlFor="">Google</label>
            </div>
            <div>
                <input type="checkbox" name='company' value="samsung" onChange={handleInputChange} />
                <label htmlFor="">Oppo</label>
            </div>
            <div>
                <input type="checkbox" name='company' value="samsung" onChange={handleInputChange}  />
                <label htmlFor="">Vivo</label>
            </div>
            <div>
                <input type="checkbox" name='company' value="samsung"  onChange={handleInputChange} />
                <label htmlFor="">Huawei</label>
            </div>
            <div>
                <input type="checkbox" name='company' value="samsung"  onChange={handleInputChange} />
                <label htmlFor="">Sony</label>
            </div>
            <div>
                <input type="checkbox" name='company' value="samsung"   onChange={handleInputChange}/>
                <label htmlFor="">Asus</label>
            </div>
            <button type="submit">Submit</button>
          </form>
    </div>
  )
}

export default GetCheckBox