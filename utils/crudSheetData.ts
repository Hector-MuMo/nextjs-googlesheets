type fetchDataProps = {
    setData: [[]]
}

const fetchData = async () => {
    try {
        const response = await fetch('api/getSheetData');
        const data = await response.json();
        data.shift();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const postData = async (formData: UserData, isSuccess: boolean) => {
    try {
        const response = await fetch('api/postSheetData', {
            method: 'POST',
            body: JSON.stringify(formData),
        })
        const data = await response.json();
        return !isSuccess
    } catch (error) {
        console.log(error);
        return !isSuccess;
    }
};

const updateData = async (formData: UserData, isSuccess: boolean) => {
    try {
        const restructure = {
            range: formData.Range,
            majorDimension: "ROWS",
            values: [
                [formData.Id, formData.Nombre, formData.Apellidos, formData.Email, formData.Telefono]
            ]
        }
        const response = await fetch('api/updateSheetData', {
            method: "PUT",
            body: JSON.stringify(restructure)
        });
        console.log(response);
        return !isSuccess;
    } catch (error) {
        console.log(error);
        return !isSuccess;
    }
};

const deleteData = async (range: string, isSuccess: boolean) => {
    try {
        const response = await fetch('api/deleteSheetData', {
            method: "POST",
            body: JSON.stringify({
                range
            })
        });
        return !isSuccess;
    } catch (error) {
        console.log(error);
        return !isSuccess;
    }
};

export {
    fetchData,
    postData,
    updateData,
    deleteData
}