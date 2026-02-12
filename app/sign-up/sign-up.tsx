import "./index.css";

export default function SignUp() {
  return (
    <div className="sign-up-container parent">
      <div className="square">
        <div className="child_1">
          <div className="column">
            <div>Get Started</div>

            <div className="style">
              <div>Name</div>
              <input className="input" type="text" placeholder="Name" />
            </div>

            <div className="style">
              <div>Email</div>
              <input className="input" type="text" placeholder="Email" />
            </div>

            <div className="style">
              <div>Password</div>
              <input className="input" type="password" placeholder="......" />
            </div>

            <div className="row">
              <div>Sign Up</div>
              <div>Sign In</div>
            </div>

            <div className="row_2">
              <input type="checkbox" name="tich" value="Terms of service" />
              <div className="content">
                <span className="blu">I agree to the </span>
                <span className="red">Terms of service </span>
                <span className="blu">and </span>
                <span className="red">Privacy Polict</span>
                <span className="blu">.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="child_2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuqd5VjBAe4wokHB3whVTcQfM1qAEZinjSW4noUq8I2UnK6WfwDKUJRU0m6G-JYxwW_s&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
