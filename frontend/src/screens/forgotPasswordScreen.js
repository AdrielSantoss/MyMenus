import react from 'react';

const forgot = () => {
    return(
        <form>
            <div>
                <h3>Insira seu email para recuperar sua senha!</h3>
                <label for="email">Email: </label>
                <input type="email" name="email" id="email"/>
                <button type="button"/>
            </div>
        </form>
    )
}

export default forgot