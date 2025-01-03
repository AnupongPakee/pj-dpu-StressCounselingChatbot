import React, { useState } from 'react'

import STYLE from "../style/Style"

function Setting() {
  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div className="container setting" style={STYLE.container}>
      <div className="content" style={STYLE.content}>
        <h1 style={STYLE.font_family.th}>การตั้งค่าธีม</h1>
        <div className="content-form">
          <form onSubmit={handleSubmit}>
            <div className="theme">
              <h2 style={STYLE.font_family.th}>ธีม</h2>
              <label htmlFor="theme-1">
                <div className="test"></div>
              </label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="theme-1">
                <div className="test"></div>
              </label>
              <label htmlFor="theme-1">
                <div className="test"></div>
              </label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="theme-1">
                <div className="test"></div>
              </label>
              <label htmlFor="theme-1">
                <div className="test"></div>
              </label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="theme-1">
                <div className="test"></div>
              </label>
              <label htmlFor="theme-1">
                <div className="test"></div>
              </label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="theme-1">
                <div className="test"></div>
              </label>
              <label htmlFor="theme-1">
                <div className="test"></div>
              </label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="theme-1">
                <div className="test"></div>
              </label>
              <label htmlFor="theme-1">
                <div className="test"></div>
              </label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="theme-1">
                <div className="test"></div>
              </label>
              <label htmlFor="theme-1">
                <div className="test"></div>
              </label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="theme-1">
                <div className="test"></div>
              </label>
              <label htmlFor="theme-1">
                <div className="test"></div>
              </label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="theme-1">
                <div className="test"></div>
              </label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
            </div>
            <div className="font">
              <h2 htmlFor="" style={STYLE.font_family.th}>แบบอักษร</h2>
              <label htmlFor="">1</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">2</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">1</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">2</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">1</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">2</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">1</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">2</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">1</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">2</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">1</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">2</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">1</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">2</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">1</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">2</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">1</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">2</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">1</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">2</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">1</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">2</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">1</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">2</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">1</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">2</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">1</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">2</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">1</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
              <label htmlFor="">2</label>
              <input type="checkbox" name="" id="" style={{ display: "none" }} />
            </div>
            <div className="second-button">
              <button type="reset" style={STYLE.font_family.th}>ยกเลิก</button>
              <button type="submit" style={STYLE.font_family.th}>ยืนยัน</button>
            </div>
          </form>
        </div>
      </div>
      <div className="not-support">
        <p style={STYLE.font_family.en}>Not Support Screen Size ({window.screen.width}x{window.screen.height})</p>
      </div>
    </div>
  )
}

export default Setting