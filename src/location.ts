export class WebLocation {
  private location: Location;
  constructor(location: Location) {
    this.location = location;
  }
  public getHref(): string {
    return this.location.href;
  }
  public setHref(href: string): void {
    this.location.href = href;
  }
  public getProtocol(): string {
    return this.location.protocol;
  }
  public setProtocol(protocol: string): void {
    this.location.protocol = protocol;
  }
  public getHost(): string {
    return this.location.host;
  }
  public setHost(host: string): void {
    this.location.host = host;
  }
  public getHostname(): string {
    return this.location.hostname;
  }
  public setHostname(hostname: string): void {
    this.location.hostname = hostname;
  }
  public getPort(): string {
    return this.location.port;
  }
  public setPort(port: string): void {
    this.location.port = port;
  }
  public getPathname(): string {
    return this.location.pathname;
  }
  public setPathname(pathname: string): void {
    this.location.pathname = pathname;
  }
  public getSearch(): string {
    return this.location.search;
  }
  public setSearch(search: string): void {
    this.location.search = search;
  }
  public getHash(): string {
    return this.location.hash;
  }
  public setHash(hash: string): void {
    this.location.hash = hash;
  }
  public getOrigin(): string {
    return this.location.origin;
  }

  public assign(url: string): void {
    this.location.assign(url);
  }
  public reload(): void {
    this.location.reload();
  }
  public replace(url: string): void {
    this.location.replace(url);
  }
  public toString(): string {
    return this.location.toString();
  }
}
export const getLocation = (): WebLocation => {
  return new WebLocation(window.location);
};
