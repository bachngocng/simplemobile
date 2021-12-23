class mobile {
    _battery;
    _draft;
    _inbox;
    _sent;
    _status;

    constructor(battery, draft, inbox, sent, status) {
        this._battery = battery;
        this._draft = draft;
        this._inbox = inbox;
        this._sent = sent;
        this._status = status;
    }

    get battery() {
        return this._battery;
    }

    set battery(value) {
        this._battery = value;
    }

    get draft() {
        return this._draft;
    }

    set draft(value) {
        this._draft = value;
    }

    get inbox() {
        return this._inbox;
    }

    set inbox(value) {
        this._inbox = value;
    }

    get sent() {
        return this._sent;
    }

    set sent(value) {
        this._sent = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    checkStatus() {
        return this._status;
    }

    switch() {
        //Bật tắt điện thoại
        //Nếu như đt đang bật => status = true => khi gọi phương thức nó sẽ gán status = !true = false
        //Nếu như đt đang tắt => status = false => khi gọi phương thức nó sẽ gán status = !false = true
        this._status = !this.status
    }

    chargeBattery() {
        this._battery++;
    }

    createMessages(content) {
        this._draft.push(content);
    }

    receiveMessages(content, mobile) {
        this._inbox.push(content);
        mobile.sent.push(content)
    }
    sentMessages(content, mobile) {
        this.sent.push(content);
        mobile.sent.push(content);
    }
}
