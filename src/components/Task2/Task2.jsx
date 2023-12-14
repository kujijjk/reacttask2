import React, { useState } from 'react'

const Task2 = () => {
	const [toggle, setToggle] = useState(true)
	const handleButtonClick = () => {
		setToggle(!toggle)
	}
	return (
		<div className='main'>
			<button className='btn' onClick={handleButtonClick}>
				Изменить значение {toggle}
			</button>
			{toggle ? (
				<div className='acc'>
					<h1>Войти в аккаунт</h1>
					<p className='p-container'>
						<em>Login:</em>
						<input type='text' placeholder='Введите логин...' />
					</p>
					<p className='p-container'>
						<em>Password:</em>
						<input type='text' placeholder='Введите пароль...' />
					</p>
					<button className='btn-acc'>
						<strong>
							<em>Подтвердить</em>
						</strong>
					</button>
				</div>
			) : (
				<div className='reg'>
					<h1>Регистрация</h1>
					<p className='p-container'>
						<em>Login:</em>
						<input type='text' placeholder='Введите логин...' />
					</p>
					<p className='p-container'>
						<em>Password:</em>
						<input type='text' placeholder='Введите пароль...' />
					</p>
					<p className='p-container'>
						<em>Email:</em>
						<input type='text' placeholder='Введите почту...' />
					</p>
					<button className='btn-reg'>
						<strong>
							<em>Подтвердить</em>
						</strong>
					</button>
				</div>
			)}
		</div>
	)
}

export default Task2
