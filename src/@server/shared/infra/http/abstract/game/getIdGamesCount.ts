import { NextRequest, NextResponse } from "next/server";

export abstract class GetIdGamesCount {
  public readonly request: NextRequest;
  public readonly response: NextResponse;

  constructor(public readonly Request: NextRequest, public readonly Response: NextResponse) {
    this.request = Request;
    this.response = Response;
  }
}
