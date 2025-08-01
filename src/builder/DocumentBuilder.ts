export class DocumentBuilder {
  private _header: string = "";
  private _body: string = "";
  private _footer: string = "";

  addHeader(header: string): this {
    this._header = header;
    return this;
  }

  addBody(body: string): this {
    this._body = body;
    return this;
  }

  addFooter(footer: string): this {
    this._footer = footer;
    return this;
  }

  build(): string {
    return `=== ${this._header} ===\n\n${this._body}\n\n${this._footer}`;
  }
}
