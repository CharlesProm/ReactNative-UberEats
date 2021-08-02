import React,{useState} from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';


const DatePicker = ({styles,date,formData,setFormData}) => {

    const handleConfirm = (date) => {
        handleChange('date', moment.utc(date).format('YYYY-MM-DD'))
        hideDatePicker();
    };
    const handleChange = (name, value) => setFormData({ ...formData, [name]: value })

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    return (
        <View style={styles.datePickerContainer} >
            <Text style={{ textAlign: 'center', color: '#00000090' }} >Fecha de nacimiento :</Text>
            <TouchableOpacity
                style={styles.datePickerBtn}
                onPress={showDatePicker}
            >
                <Text style={styles.datePickerText} >{`${date}`}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode={'date'}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    timeZoneOffsetInMinutes={0}
                    is24Hour={false}
                />
        </View>
    )
}

export default DatePicker
