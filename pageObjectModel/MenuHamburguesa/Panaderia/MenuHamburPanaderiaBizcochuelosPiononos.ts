import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPanaderiaBizcochuelosPiononos extends BasePage {

    readonly BIZCOCHUELOS_PIONONOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BIZCOCHUELOS_PIONONOS = this.page.locator('')
    }

    async clickPanaderiaBizcochuelosPiononos(): Promise<void> {
        await this.click(this.BIZCOCHUELOS_PIONONOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPanaderiaBizcochuelosPiononos(): Promise<void> {
        await this.clickPanaderiaBizcochuelosPiononos()
    }
}
