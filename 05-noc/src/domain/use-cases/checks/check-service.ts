interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService implements CheckServiceUseCase {
  constructor(
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback,
  ) {
    console.log("CheckService initialized...");
  }

  async execute(url: string): Promise<boolean> {
    console.log("CheckService executing...");

    try {
      const req = await fetch(url);

      if (!req.ok) {
        throw new Error(`Error on CheckService ${url}`);
      }

      this.successCallback();
      //   console.log(`CheckService executed successfully for ${url}`);
      return true;
    } catch (error) {
      this.errorCallback(`${error}`);
      //   console.error("CheckService failed:", error);
      return false;
    }
  }
}
