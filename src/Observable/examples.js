import { Observable } from "./index";

const observable = new Observable();

const logger = (data) => console.log(`${Date.now()} ${data}`);
const informer = (data) => console.info(`We wish to inform you about: "${data}".`);

observable.subscribe(logger);
observable.subscribe(informer);

observable.notify("Hello, World!");

observable.unsubscribe(logger);

observable.notify("This time no logger.");
