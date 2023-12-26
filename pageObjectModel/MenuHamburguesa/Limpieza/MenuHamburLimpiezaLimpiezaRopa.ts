import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaLimpiezaDeRopa extends BasePage {

    readonly LIMPIEZA_DE_ROPA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIMPIEZA_DE_ROPA = this.page.locator('')
    }

    async clickLimpiezaLimpiezaDeRopa(): Promise<void> {
        await this.click(this.LIMPIEZA_DE_ROPA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLimpiezaLimpiezaDeRopa(): Promise<void> {
        await this.clickLimpiezaLimpiezaDeRopa()
    }
}
